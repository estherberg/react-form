import "./index.css";
import React from "react";
import valid from "./valide.jpg";
import invalid from "./invalide.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let clickImageEmail = false;
let clickImageTelegram = false;
const notify = () => toast("Your informations has been saved!");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgEmail: valid,
      imgTelegram: valid,
    };
    this.clickEmail = this.clickEmail.bind(this);
    this.clickTelegram = this.clickTelegram.bind(this);
  }

  clickEmail(event) {
    clickImageEmail = !clickImageEmail;
    // console.log(clickImageEmail)
    event.preventDefault();
    this.setState({ imgEmail: clickImageEmail ? invalid : valid });
  }

  clickTelegram(event) {
    clickImageTelegram = !clickImageTelegram;
    // console.log(clickImageTelegram)
    event.preventDefault();
    this.setState({ imgTelegram: clickImageTelegram ? invalid : valid });
  }

  validForm = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email } = e.target.elements;
    console.log(
      "First name : " + firstName.value,
      "\nLast Name : " + lastName.value + "\nEmail : " + email.value
    );
    notify();
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.validForm} className="form">
          {/*titre*/}
          <div className="flex justify-start">
            <h1 className="title">Your profil</h1>
          </div>
          {/*fistname / lastname*/}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="flex justify-start block tracking-wide text-gray-1000 text-sm font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-2500 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
                type="text"
                required
              ></input>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="flex justify-start block tracking-wide text-gray-1000 text-sm font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-2500 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                name="lastName"
                type="text"
                required
              ></input>
            </div>
          </div>
          {/*Email*/}
          <div className="w-full">
            <label
              className="flex justify-start block tracking-wide text-gray-2500 text-sm font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-2500 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              required
            ></input>
          </div>
          {/*Notifications*/}
          <div className="grid grid-cols-2 lg:grid-flow-col pt-5">
            <div className="notif">
              <p className="flex justify-start text-sm font-bold">
                Communication channel
              </p>
            </div>
            <div className="notif">
              <p className="flex justify-end text-sm font-bold">
                Notifications
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-flow-col pt-2">
            <div className="">
              <p className="flex justify-start text-sm pb-2">Email</p>
              <p className="flex justify-start text-sm">Telegram</p>
            </div>
            <div>
              <div className="flex justify-end pr-8 pb-2">
                <button className="btn">
                  {/*<img src={clickclickImageEmailMail ? valid : invalid} className="App-logo" alt="logo" width="25" onClick={clickMail}/>*/}
                  <img
                    src={this.state.imgEmail}
                    className="App-logo"
                    alt="logo"
                    width="25"
                    onClick={this.clickEmail}
                  />
                </button>
              </div>
              <div className="flex justify-end pr-8">
                <button className="btn">
                  <img
                    src={this.state.imgTelegram}
                    className="App-logo"
                    alt="logo"
                    width="25"
                    onClick={this.clickTelegram}
                  />
                </button>
              </div>
            </div>
          </div>
          {/*bouton save*/}
          <div className="w-full">
            <div className="md:items-center py-6 px-3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
          <div>
            <ToastContainer />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
