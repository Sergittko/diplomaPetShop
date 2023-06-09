import github from "../../../img/icons/contacts/github.svg";
import gmail from "../../../img/icons/contacts/gmail.svg";
import instagram from "../../../img/icons/contacts/instagram.svg";
import linkedin from "../../../img/icons/contacts/linkedin.svg";
import telegram from "../../../img/icons/contacts/telegram.svg";
import style from "./FooterContacts.module.scss";

let FooterContacts = () => {
  return (
    <div className={style.footerContacts}>
      {/* <p>Наші контакти</p> */}
      <ul>
        <li>
          {/* <a href="" title="LinkedIn" target="_blank" rel="noreferrer"> */}
          <img src={linkedin} alt="LinkedIn" />
          {/* </a> */}
        </li>
        {/* <li> */}
        {/* <a href="" title="GitHub" target="_blank" rel="noreferrer"> */}
        {/* <img src={github} alt="GitHub" /> */}
        {/* </a> */}
        {/* </li> */}
        <li>
          {/* <a href="" title="Gmail" target="_blank" rel="noreferrer"> */}
          <img src={gmail} alt="Gmail" />
          {/* </a> */}
        </li>
        <li>
          {/* <a href="" title="Instagram" target="_blank" rel="noreferrer"> */}
          <img src={instagram} alt="Instagram" />
          {/* </a> */}
        </li>
        <li>
          {/* <a href="" title="Telegram" target="_blank" rel="noreferrer"> */}
          <img src={telegram} alt="Telegram" />
          {/* </a> */}
        </li>
      </ul>
    </div>
  );
};

export default FooterContacts;
