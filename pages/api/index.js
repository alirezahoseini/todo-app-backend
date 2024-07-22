
export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json({ message: "Wellcome to todo app backend" });
      break;
  
    default:
      res.status(200).json({ message: "Wellcome to todo app backend" });
      break;
  }
}
