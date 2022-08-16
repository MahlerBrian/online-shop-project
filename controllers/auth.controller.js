function getSignup(req, res) {
    res.render('customer/auth/signup');
}

function signUp() {

}

function getLogin(req, res) {
    //...
}

module.exports = {
    getSignup: getSignup,
    getLogin: getLogin,
    signUp: signUp
};