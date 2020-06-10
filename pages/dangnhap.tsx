import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import Router from 'next/router';
import PanelFrame from '../components/PanelFrame';
import RutTien from '../components/DashBoard/RutTien';
import { login, setToken, getUserId, getUserInfo, setBudgetId } from '../src/api';

const App: NextPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <style jsx>
        {`
          .content {
            position: relative;
            border: 1px solid black;
            width: 900px;
            height: 500px;
            margin-top: 80px;
            margin-left: 300px;
          }
          .content-left {
            background-color: deepskyblue;
            position: absolute;
            top: 0px;
            left: 0px;
            bottom: 0px;
            width: 300px;
            border-right: 1px solid black;
          }
          .content-right {
            position: absolute;
            width: 600px;
            top: 0px;
            left: 300px;
            bottom: 0px;
          }
          .text1 {
            padding-top: 30px;
            padding-left: 7px;
            padding-right: 7px;
            font-size: 20px;
            color: white;
          }
          .text2 {
            font-size: 35px;
            padding-top: 30px;
            padding-left: 150px;
            color: blue;
          }
          .menu-item1 {
            display: flex;
            position: absolute;
            top: 380px;
          }
          .menu-item1 .menu-item-icon-help {
            width: 18px;
            height: 20px;
            background-image: url('../image/Icons_All.png');
            background-position: -3px -3px;
            background-repeat: no-repeat;
          }
          .menu-item1 .menu-item-text {
            color: white;
            padding-left: 15px;
          }
          .menu-item2 {
            display: flex;
            position: absolute;
            top: 410px;
          }
          .menu-item2 .menu-item-icon-email {
            width: 18px;
            height: 20px;
            background-image: url('../image/Icons_All.png');
            background-position: -3px -39px;
            background-repeat: no-repeat;
          }
          .menu-item2 .menu-item-text {
            color: white;
            padding-left: 15px;
          }
          .menu-item3 {
            display: flex;
            position: absolute;
            top: 440px;
          }

          .menu-item3 .menu-item-icon-hd {
            width: 18px;
            height: 20px;
            background-image: url('../image/Icons_All.png');
            background-position: -3px -71px;
            background-repeat: no-repeat;
          }

          .menu-item3 .menu-item-text {
            color: white;
            padding-left: 15px;
          }
          .mm {
            width: 400px;
            height: 30px;
            margin-top: 100px;
            margin-left: 100px;
            border: 1px solid blue;
          }
          .mmm {
            width: 400px;
            height: 30px;
            margin-top: 20px;
            margin-left: 100px;
            border: 1px solid blue;
          }
          .m1 {
            width: 400px;
            height: 25px;
            margin-top: 20px;
            margin-left: 100px;
            border: 1px solid blue;
          }
        `}
      </style>
      <div className="head" />
      <div className="content">
        <div className="content-left">
          <div className="text1">PHẦN MỀM MÔ PHỎNG ATM </div>
          <div className="menu-item1">
            <div className="menu-item-icon-help" />
            <div className="menu-item-text"> ATM SUPPORT</div>
          </div>
          <div className="menu-item2">
            <div className="menu-item-icon-email" />
            <div className="menu-item-text"> atm_applocation@gmail.com</div>
          </div>
          <div className="menu-item3">
            <div className="menu-item-icon-hd" />
            <div className="menu-item-text"> Hướng dẫn sử dụng</div>
          </div>
        </div>
        <div className="content-right">
          <div className="text2">ATM_APPLICATION</div>
          <form
            className="dialog-body"
            onSubmit={e => {
              if (typeof window !== 'undefined') {
                login(username, password)
                  .then(res => {
                    if (res.data.status === 'success') {
                      setToken(res.data.data.userId, res.data.data.token);
                      getUserInfo(getUserId()).then(res => {
                        setBudgetId(res.data.data.budget);
                        Router.push('/');
                      });
                      return;
                    } else {
                      alert('Username or Password not correct, please try again');
                    }
                  })
                  .catch(err => {
                    alert('Username or Password not correct, please try again');
                  });
              }
              e.preventDefault();
            }}
          >
            <input
              className="mm"
              type="text"
              name="tai khoan"
              placeholder="số tài khoản"
              value={username}
              onChange={(e: any): unknown => setUsername(e.target.value)}
            />
            <input
              className="mmm"
              type="text"
              name="ma pin"
              placeholder="mã pin"
              id="13"
              value={password}
              onChange={(e: any): unknown => setPassword(e.target.value)}
            />
            <br />
            <input className="m1" type="submit" value="Đăng nhập" />
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
