switch (part?.__typename) {
              case "PageSectionHeroBanner" : {
              return (<><HeroBanner key={i} {...part} /> 
                <section className="p-6 bg-salmon-green text-gray-100 rounded-b-lg">
                  <div className="container p-4 mx-auto text-center">
                    <h2 className="text-4xl font-bold">Partners with industry leaders</h2>
                  </div>
                  <div className="container flex flex-wrap justify-center mx-auto text-salmon-light-g2">
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                      <img src="./uploads/team/partners/Bureau-of-Land-Management/Logo_of_the_United_States_Bureau_of_Land_Management.svg" className="w-16 h-16" />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                      <img src="./uploads/team/partners/US-Forest-Service/usfs.png" className="w-16 h-16" />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                      <img src="./uploads/team/partners/The-Nature-Conservancy/the-nature-conservancy-logos-idAgi8uT3_.jpeg" className="w-16 h-16 rounded-full" />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                      <img src="./uploads/team/partners/National-Wildlife-Federation/national-wildlife-federation.png" className="w-16 h-16 rounded-full" />
                    </div>
                  </div>
                </section>
                </>
              )
            }
          }