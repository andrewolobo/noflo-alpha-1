const noflo = require("noflo");

exports.getComponent = () => {
    const c = new noflo.Component();
    c.description = 'multiply number';
    c.icon = "file";

    c.inPorts.add("in", {
        datatype: "int"
    });
    c.outPorts.add("out", {
        datatype: "int"
    });
    c.outPorts.add("out", {
        datatype: "object"
    });

    c.process((input, output) => {
        if (!input.hasData("in")) {
            return;
        }
        const number = input.getData("in");
        output.send({
            out: number*number
        });
        output.done();
        return c;
    })
}