// // 1) Way of export (write export with component)
// export default function HelloWorld(){
//     const para = <p>This is my First React App</p>
//     return(
//         <>
//             <h1>Hello</h1>
//             {para}
//         </>
//     )
// }

// // 2) Way of export (write export in last)
// function HelloWorld(){
//     const para = <p>This is my First React App</p>
//     return(
//         <>
//             <h1>Hello</h1>
//             {para}
//         </>
//     )
// }

// // export default means import with any name
// export default HelloWorld

function HelloWorld(){
    const para = <p>This is my First React App</p>
    return(
        <>
            <h1>Hello</h1>
            {para}
        </>
    )
}

// only export means when import in any other file ,must be of same name. also only export use {} 
export { HelloWorld }