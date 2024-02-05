/**
 * express generator ES6+ Template
 * @author : callor@callor.com
 * @since : 2020-12-10
 * @update : 2024-01-19
 * @see : nodejs + express 프로젝트에서 ES6+ 문법을 사용하기 위한 template
 */

// essential modules
import express from "express";
import createError from "http-errors";
import path from "path";
import helmet from "helmet";
import session from "express-session";
import mysql from "mysql2/promise"; /** */

// 3rd party lib modules
import cookieParser from "cookie-parser";
import logger from "morgan";

// import router modules
import indexRouter from "../routes/index.js";
import usersRouter from "../routes/users.js";
import fridgeRouter from "../routes/fridge.js";
import calendarRouter from "../routes/calendar.js";
import alarmRouter from "../routes/alarm.js";
import settingRouter from "../routes/setting.js";

// create express framework
const app = express();

// helmet security module
app.use(helmet());

// Disable the fingerprinting of this web technology.
app.disable("x-powered-by");

// view engine setup
app.set("views", path.join("views"));
app.set("view engine", "pug");

// middleWare enable
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join("public")));

app.use(
  session({
    key: "fridge",
    secret: "wjdduscldrn@naver.com",
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    },
  })
);

// MySQL 연결 정보 //** */
const pool = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "!Biz8080",
  database: "fridgedb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
// 클라이언트로부터의 POST 요청을 처리하는 라우트
app.post("/saveToDatabase", async (req, res) => {
  try {
    const { content } = req.body; // 클라이언트가 보낸 데이터

    // 데이터베이스에 데이터 삽입 쿼리 실행
    const [rows, fields] = await pool.query("INSERT INTO tbl_shopping (s_name) VALUES (?)", [content]);

    // 쿼리 실행 결과를 클라이언트로 응답
    res.status(200).json({ success: true, message: "Data inserted successfully." });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ success: false, message: "Failed to insert data." });
  }
});
app.use((req, res, next) => {
  res.locals = req.session;
  next();
});

app.use("/users", usersRouter);
app.use("/fridge", fridgeRouter);
app.use("/calendar", calendarRouter);
app.use("/alarm", alarmRouter);
app.use("/setting", settingRouter);

// router link enable, link connection
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
