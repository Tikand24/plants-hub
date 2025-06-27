const logoFinal = new Proxy({"src":"/_astro/logofinal.8Bow174M.jpg","width":516,"height":365,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/tikan/Documents/GitHub/plants-hub/src/images/logofinal.jpg";
							}
							
							return target[name];
						}
					});

export { logoFinal as l };
