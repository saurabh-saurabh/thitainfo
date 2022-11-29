import React from "react";
import { CopyBlock, androidstudio } from "react-code-blocks";

const Java100Que = () => {
  return (
    <div className="deco">
      <h1 id="using_code_example_in_html">Top 100 java interview question</h1>

      <h2 id="the_html">The HTML</h2>
      <p>Say we wanted to show this CSS code on our page:</p>
      <CopyBlock
        text={`class Demo{
    public static void main(String[] args) {
        System.out.println("Hello World !!!");
    }
}
`}
        language={"java"}
        theme={androidstudio}
        showLineNumbers={true}
      ></CopyBlock>
      <p>Here is an example of the HTML we put in our page to show it:</p>
    </div>
  );
};

export default Java100Que;
