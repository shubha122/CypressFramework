export class ElementUtility{
    typeText(locator,value){
        locator.type(value)
     }
     clickBtn(locator){
        locator.click()
     }
    findElement(locator){
        const element=cy.get(locator)
         return element
     }
     getTitle(){
      const pageTitle=cy.title()
      return pageTitle
   }
     
    }