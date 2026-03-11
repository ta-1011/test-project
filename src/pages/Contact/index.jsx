import React, { useState } from "react";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";
import ErrorMessage from "../../components/ui/ErrorMessage";

const Contact = () => {
  // 入力テキストの表示
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // エラー用のテキスト表示
  const [nameErrorMessage, setNameErrorMessage] = useState();
  const [emailErrorMessage, setEmailErrorMessage] = useState();
  const [messageErrorMessage, setMessageErrorMessage] = useState();

  // バリデーションの定義
  const valid = () => {
    let isValid = true;
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!name) {
      nameError = "お名前は必須です。";
      isValid = false;
    } else if (name.length > 30) {
      nameError = "お名前は30文字以内で入力してください。";
      isValid = false;
    }

    if (!email) {
      emailError = "メールアドレスは必須です。";
      isValid = false;
    } else if (!email.match(/.+@.+\..+/)) {
      emailError = "メールアドレスの形式が正しくありません。";
      isValid = false;
    }

    if (!message) {
      messageError = "本文は必須です。";
      isValid = false;
    } else if (message.length > 500) {
      messageError = "本文は500文字以内で入力してください。";
      isValid = false;
    }

    setNameErrorMessage(nameError);
    setEmailErrorMessage(emailError);
    setMessageErrorMessage(messageError);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid()) {
      return;
    }

    try {
      console.log("送信ok");
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  // フォーム内容のクリア
  const handleClear = () => {
    return setName(""), setEmail(""), setMessage("");
  };

  return (
    <div className="max-w-200 mx-auto py-10">
      <h1>お問い合わせフォーム</h1>
      <form onSubmit={handleSubmit} noValidate>
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
            <ErrorMessage message={nameErrorMessage} />
          </div>
        </div>
        <div className="mt-8 w-full flex justify-between">
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
            <ErrorMessage message={emailErrorMessage} />
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
            <ErrorMessage message={messageErrorMessage} />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button type="submit" className="mr-4">
            送信
          </button>
          <button type="button" onClick={handleClear}>
            クリア
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
