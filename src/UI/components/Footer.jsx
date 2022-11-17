export const Footer = () => {
  return (
    <>
      <footer className="footer">
            <div className="footer_container footer_grid">
                <div className="footer_widget">
                  <img src='../images/marvel2.png' className='nav_logo-marvel nav_logo-marvel-rotate' alt="logo podcast fm" />
                  <img src='../images/dc.png' className='nav_logo-dc nav_logo-dc-rotate' alt="logo podcast fm" />
                </div>

                <div className="footer_widget">
                  <h3>Heroes</h3>
                  <nav className="footer_nav">
                    <a href="#" className="nav_link nav_link-footer" >Catalog</a>
                    <a href="#" className="nav_link nav_link-footer" >Grafics</a>
                    <a href="#" className="nav_link nav_link-footer" >Distribution</a>
                  </nav>
                </div>

                <div className="footer_widget">
                  <h3>Streaming</h3>
                  <nav className="footer_nav">
                    <a href="#" className="nav_link nav_link-footer">About us</a>
                      <a href="#" className="nav_link nav_link-footer">Clients</a>
                      <a href="#" className="nav_link nav_link-footer">Streaming Services</a>
                  </nav>
                </div>
                
                <div className="footer_widget">
                  <h3>Support</h3>
                  <nav className="footer_nav">
                      <a href="#" className="nav_link nav_link-footer" >Solutions</a>
                      <a href="#" className="nav_link nav_link-footer" >Prices</a>
                      <a href="#" className="nav_link nav_link-footer" >API</a>
                  </nav>
                </div>
            </div>
            <p className="copyright">Heroes Art App by RR - All Rights Reserved ©</p>
      </footer>
    </>
  )
}
