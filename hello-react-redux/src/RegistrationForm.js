import { Component } from "react";

class RegistrationForm extends Component {
  state = {
    username: "toto",
    description: "lorem ipsum",
    genre: "Femme",
    newsletter: true,
  };

  handleChange = (event) => {
    const value = (event.currentTarget.type === 'checkbox') ? event.currentTarget.checked : event.currentTarget.value;
    this.setState({
      [event.currentTarget.name]: value,
    });
  };

  render() {
    const { username, description, genre, newsletter } = this.state;
    return (
      <form className="RegistrationForm">
        <div>
          Username:{" "}
          <input
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Description:{" "}
          <textarea
            name="description"
            value={description}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div>
          Genre :{" "}
          <select name="genre" value={genre} onChange={this.handleChange}>
            <option>Homme</option>
            <option>Femme</option>
          </select>
        </div>
        <div>
          Newsletter :{" "}
          <input name="newsletter" type="checkbox" checked={newsletter} onChange={this.handleChange} />
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
