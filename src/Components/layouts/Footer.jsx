
function Footer() {
    const footerYear= new Date().getFullYear()
  return (
    <footer className="footer py-10 bg-gray-700 text-primary-content footer-center">
      <p>copyright &copy; {footerYear} All rights reserve</p>
    </footer>
  )
}

export default Footer
