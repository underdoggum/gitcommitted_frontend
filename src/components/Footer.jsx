const Footer = props => {
    const footer = {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "2.5rem",
    zIndex: "1",
    backgroundColor: "#DCDCDC",
    paddingTop: "0.75rem",
  }


  return (
    <footer style={footer}>
      Nathan Noack | 2021 Atlanta, GA | All Rights Reserved
    </footer>
  )
}


export default Footer;
