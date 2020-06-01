import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";

import "./UserForm.scss";

const UserForm = () => {
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("johndoe");
  const [name, setName] = useState("john doe");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [submit, setSubmit] = useState(false);

  async function hadleCreatedUSer() {
    await fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: {
        name,
        avatar,
        username,
        email,
      },
    });

    setSubmit(true);
  }

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {avatar ? (
                  <img src={avatar} alt="" />
                ) : (
                  <img
                    src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                    alt=""
                  />
                )}
              </div>

              {name && (
                <p className="user__name">
                  {name}
                  <span>@{username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Ex: Fulano da Silva"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />

            <label>Usuário</label>
            <input
              type="text"
              placeholder="Ex: Fulano_da_Silva"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required={true}
            />

            <label>Email</label>
            <input
              type="Email"
              placeholder="Ex: fulano@provedor.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />

            <label>
              Url da Imagem de Perfil (use a url da imagem do Linkedin)
            </label>
            <input
              type="text"
              placeholder="https://"
              onChange={(e) => setAvatar(e.target.value)}
            />

            <button
              type="button"
              onClick={() => {
                hadleCreatedUSer();
              }}
            >
              Cadastar
            </button>
          </div>
        </div>
      </section>

      {submit && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
