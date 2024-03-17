import React from 'react'
import { HeaderComponent } from './HeaderComponent'
import { GeneralInfoComponent } from './InternalComponents/GeneralInfoComponent'
import { FooterComponent } from './FooterComponent'
import { RouterComponent } from '../MiscComponents/Router/RouterComponent'
import { AstrologicalInfoComponent } from './InternalComponents/AstrologicalInfoComponent'
import { PersonalInfoComponent } from './InternalComponents/PersonalInfoComponent'
import { FamilyInfoComponent } from './InternalComponents/FamilyInfoComponent'
import { EducationalInfoComponent } from './InternalComponents/EducationalInfoComponent'
import { SubmitComponent } from './InternalComponents/SubmitComponent'

export const MainComponent = () => {
  return (
    <div>
        <HeaderComponent/>
        <RouterComponent urls = {["general","astrological","personal","family","education","submit"]}
        elements = {[<GeneralInfoComponent/>,<AstrologicalInfoComponent/>,<PersonalInfoComponent/>,<FamilyInfoComponent/>,<EducationalInfoComponent/>, <SubmitComponent/>]}
        />
        <hr/>
        <FooterComponent/>
    </div>
  )
}
