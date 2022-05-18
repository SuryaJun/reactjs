const validation = (values) => {
    let errors = {};

    if(!values.username) {
        errors.username="Kolom tidak boleh kosong.";
    }
    if(!values.email) {
        errors.email="Kolom tidak boleh kosong.";
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email="Email invalid.";
    }
    if(!values.password) {
        errors.password="Kolom tidak boleh kosong.";
    } else if (values.password.lenght < 5) {
        errors.password = "Password harus lebih dari 5 karakter.";
    }

    return errors;
};

export default validation;