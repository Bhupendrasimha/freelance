import React from "react"
import renderer from "react-test-renderer"
import AddEmployee from "../components/exployee"
import ReactDom from "react-dom"
import "@testing-library/jest-dom/extend-expect"
import { render, cleanup, fireEvent } from '@testing-library/react';
//afterEach(cleanup)

//describe("testing",()=>{
  //  it("should render with out crashing",()=>{
    //  const div=document.createElement('div')
      //ReactDom.render(<App></App>,div)
    //})
   // it("snapshot",()=>{
     //   const tree=renderer.create(<EmployeesTable/>).toJSON()
       // expect(tree).toMatchSnapshot()
    //})
    it("Invoke edit button",()=>{
        const {getByTestId} = render(<AddEmployee/>)
        const nameInput=getByTestId('nameInput')
        const button= getByTestId('submit')
      
       // const button=getByTestId("button")
        fireEvent.click(button)
        expect(nameInput).toHaveValue("")
      //  expect(button).toHaveBeenCalledTimes(1)
       // fireEvent.click(reduce)
      
      })
     
   // })