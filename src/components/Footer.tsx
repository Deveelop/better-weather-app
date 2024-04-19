

const Footer = () => {
  return (
    <footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<form action="#" className="subscribe-form">
								<input type="text" placeholder="Enter your email to subscribe..."/>
								<input type="submit" value="Subscribe"/>
							</form>
						</div>
						
					</div>

					<p className="colophon">Copyright &copy; {new Date().getFullYear()}  Devee Forecast. Designed by Victor Abuka. All rights reserved</p>
				</div>
			</footer>
  )
}

export default Footer
