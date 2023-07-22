import React, { FormEvent } from "react";

type Props = {
  children: React.ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const Form = ({ children, onSubmit }: Props) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
