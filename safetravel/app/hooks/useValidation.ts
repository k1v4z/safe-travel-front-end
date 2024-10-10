import { useState } from "react";

const useValidation = () => {
    const [usernameErrors, setUsernameErrors] = useState({
        length: false
    })

    const [passwordErrors, setPasswordErrors] = useState({
        length: false,
        uppercase: false,
        number: false,
        symbol: false
    })

    const[usernameTouched, setUsernameTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);

    // Validate username
    const validateUsername = (username: string) => {
        setUsernameTouched(true); // Set to true once user starts typing
        const errors = {
            length: username.length >= 6 && username.length <= 255,
        };

        setUsernameErrors({
            length: !errors.length,
        });

        return errors.length;
    };

    const validatePassword = (password: string) => {
        setPasswordTouched(true); // Set to true once user starts typing
        const errors = {
            length: password.length >= 6 && password.length <= 255,
            uppercase: /[A-Z]/.test(password),
            number: /\d/.test(password),
            symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        };

        setPasswordErrors({
            length: !errors.length,
            uppercase: !errors.uppercase,
            number: !errors.number,
            symbol: !errors.symbol,
        });

        return Object.values(errors).every(Boolean);
    };

    return {
        validateUsername,
        validatePassword,
        usernameErrors,
        passwordErrors,
        usernameTouched,
        passwordTouched,
    };

}

export default useValidation