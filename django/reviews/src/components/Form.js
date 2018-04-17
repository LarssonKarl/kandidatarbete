import React, { Component } from "react";
import PropTypes from "prop-types";
import DataProvider from "./DataProvider";
import FormLocation from "./formLocation";
import FormTags from "./formTags";
import shortid from "shortid";

const uuid = shortid.generate;

const DropdownLocation = () => (
  <DataProvider endpoint="api/location/" render={data => <FormLocation data={data} /> } />
);

const SelectTags = () => (
  <DataProvider endpoint="api/tag/" render={data => <FormTags data={data} /> } />
);

class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };

  state = {
    title: "",
    location: "",
    text: "",
    tags: "",
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, location, text, tags } = this.state;
    const author = document.getElementById('uid').innerHTML;
    const review = { author, title, location, text, tags};

    console.log(review);
    const conf = {
      method: "post",
      body: JSON.stringify(review),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
  };

  render() {
    const { title, location, text, tags } = this.state;

    console.log("field changed");

    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="title"
                onChange={this.handleChange}
                value={title}
                required
              />
            </div>
          </div>
          <div className="field" onChange={this.handleChange} value={location}>
            <label className="label">location</label>
             <DropdownLocation />
          </div>
          <div className="field">
            <label className="label">text</label>
            <div className="control">
              <textarea
                className="textarea"
                type="text"
                name="text"
                onChange={this.handleChange}
                value={text}
                required
              />
            </div>
          </div>
          <div className="field" onChange={this.handleChange} value={tags}>
            <label className="label">tags</label>
            <SelectTags />
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Send text
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
