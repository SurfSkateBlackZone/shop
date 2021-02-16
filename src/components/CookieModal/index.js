import React from "react";
import "./style.scss";
import Cookies from "js-cookie";
import useGAEventTracker from "hooks/useGAEventTracker";

const CookieModal = ({ hideModal }) => {
  const GAEventsTracker = useGAEventTracker("Cookie Consent");
  const onClose = () => {
    hideModal();
    Cookies.set("CookieConsent", "true");
    GAEventsTracker("AcceptCookieConsent");
  };

  return (
    <div className="modal">
      <p>
        Al continuar su navegación, usted acepta el uso de cookies para mejorar
        la calidad de su visita.
      </p>
      <div className="btn-container">
        <button className="accept-cookie" onClick={onClose}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default CookieModal;
