// import { generate } from "qrcode-terminal"; -> err
const qrcode = require('qrcode-terminal');

const qr = `1@DYZM9Y7+JBq1c+0TigkfeKUFj5y2bEJko/4MRz2EU3nQpGxdDgVYMqCwKdaXdzDsTKjbYkc8eswoSg==,kEkbz6rn1k3MvmZ+HhsHQusz6pgmWqzgWY55aZtM21o=,AqWACiDRD+oJ+Sq/72WXWQ==`

qrcode.generate(qr)
