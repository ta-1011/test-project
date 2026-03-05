import React, { use, useState } from "react";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClear = () => {
    return setName(""), setEmail(""), setMessage("");
  };

  return (
    <div className="max-w-200 mx-auto py-10">
      <h1>お問い合わせフォーム</h1>
      <form action="">
        <div className="mt-8 w-full flex justify-between">
          <label htmlFor="" className="w-60">
            お名前
          </label>
          <div className="w-full">
            <Input
              type="text"
              value={name}
              id="name"
              onChange={(value) => {
                return setName(value);
              }}
            />
          </div>
        </div>
        <div className="mt-8 ws-full flex justify-between">
          <label htmlFor="" className="w-60">
            メールアドレス
          </label>
          <div className="w-full">
            <Input
              type="email"
              value={email}
              id="email"
              onChange={(value) => {
                return setEmail(value);
              }}
            />
          </div>
        </div>
        <div className="mt-8 w-full flex justify-between">
          <label htmlFor="" className="w-60">
            お問い合わせ内容
          </label>
          <div className="w-full">
            <TextArea
              value={message}
              id="message"
              onChange={(value) => {
                return setMessage(value);
              }}
            />
          </div>
        </div>
      </form>
      <div className="flex justify-center mt-8">
        <button type="submit" className="mr-4">
          送信
        </button>
        <button type="button" onClick={handleClear}>
          クリア
        </button>
      </div>
    </div>
  );
};

export default Contact;
