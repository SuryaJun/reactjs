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
    }

    return errors;
};

export default validation;