import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.png";

const SecondNav = ({ isLogin }) => {
	return (
		<>
			<section className="relative w-full sm:px-9 text-gray-700 bg-white body-font">
				<div className="max-w-screen-2xl container flex flex-col lg:flex-row justify-between py-5 px-0 mx-auto md:flex-row">
					<div className="flex items-center justify-center md:justify-start">
						<Link to="/">
							<img
								src={Logo}
								alt="logo"
								className="block object-contain mx-w-17-4 mx-h-4-6 lg:w-17-4"
							/>
						</Link>
					</div>
					<div className="relative flex-col lg:flex-row inline-flex items-center md:items-end lg:items-center lg:space-x-3">
						{isLogin ? (
							<>
								<span className="inline-flex items-center lg:justify-center px-14 md:px-0 lg:px-14 py-3.5 text-xl font-semibold leading-6 text-black whitespace-no-wrap">
									¿No tienes una cuenta?
								</span>
								<Link
									to="/register"
									className="inline-flex hover-scale items-center justify-center px-14 py-3.5 text-xl font-semibold leading-6 text-white whitespace-no-wrap bg-primary rounded-md shadow-button"
								>
									Regístrate aquí
								</Link>
							</>
						) : (
							<>
							<span className="inline-flex items-center lg:justify-center px-14 md:px-0 lg:px-14 py-3.5 text-xl font-semibold leading-6 text-black whitespace-no-wrap">
									¿Ya tienes una cuenta?
								</span>
							<Link
								to="/login"
								className="shadow-button hover-scale inline-flex items-center justify-center px-14 py-3.5 text-xl font-semibold leading-6 text-white whitespace-no-wrap bg-primary rounded-md"
								>
								Iniciar Sesión
							</Link>
							</>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default SecondNav;
