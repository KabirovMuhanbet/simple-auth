import { useState } from "react";
import { Link } from "react-router-dom";
const Form = ({title, spanTitle, linkTitle, link, handleSubmit}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form">
      <label htmlFor="email">Введите свой email, телефон или id:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        id="email"
      />
      <label htmlFor="password">Введите свой пароль:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        id="password"
      />
      <span>
      {spanTitle} <Link to={link}>{linkTitle}</Link>
      </span>
      <button onClick={() => handleSubmit(email, password)}>
        {title}
      </button>
    </div>
  );
};

export default Form;
