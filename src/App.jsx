import React from "react"

import Slider from "./slider/slider"
import Form from "./form"
import Header from "./header/header"
import Find from "./body/find"
import Result from "./body/result"
import Services from "./body/services"
import Members from "./body/members"
import Newsletter from "./body/newsletter"
import Footer from "./body/footer"

export default function App(){


    return(
      <div className="mx-auto max-w-screen-2xl text-container-0 font-Sora bg-secondary-0 space-y-8">
        <Header />
        <Slider />
        <Find />
        <Result />
        <Services />
        <Members />
        <Form />
        <Newsletter />
        <Footer />

      </div>
    )
}

