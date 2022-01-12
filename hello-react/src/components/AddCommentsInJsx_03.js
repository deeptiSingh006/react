/*Add Comments in JSX
JSX is a syntax that gets compiled into valid JavaScript. Sometimes, for readability, 
you might need to add comments to your code. Like most programming languages,
JSX has its own way to do this.

To put comments inside JSX, you use the syntax : <See in Code below >

/*to wrap around the comment text.

The code editor has a JSX element similar to what you created in the last challenge. 
Add a comment somewhere within the provided div element, without modifying the existing 
h1 or p elements.

*/
const JSX = (
    <div>
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
      {/* These are comment Tags*/}
    </div>
  );

  function AddCommentsInJsx_03(){
    return JSX;
  }
  
  export default AddCommentsInJsx_03;