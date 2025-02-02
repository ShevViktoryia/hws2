import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (name: string) => void;
};

export const pureAddUser = (
  name: string,
  setError: (err: string) => void,
  setName: (n: string) => void,
  addUserCallback: (name: string) => void
) => {
  if (name.length) {
    setName("");
    addUserCallback(name);
  } else {
    setError("Ошибка! Введите имя!");
  }
};

export const pureOnBlur = (name: string, setError: (err: string) => void) => {
  if (!name.length) setError("Ошибка! Введите имя!");
};

export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: () => void
) => {
  if (e.key === "Enter") addUser();
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);

    error && setError("");
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = users.length;
  const lastUserName = totalUsers ? users[users.length - 1].name : "";

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
