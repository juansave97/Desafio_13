
const getDataHome = (req, res) => {
    const data = {
        title: "Desafio Nº13",
        content: ""
    }
    return res.render(`index`, data);
}

module.exports = {
    getDataHome,
};

