 const theory=[
    {
        name:"Bubble Sort",
        timeComp:"O( n^2 )",
        spaceComp:"O( 1 )",
        colours:{
            "green":"Elements Being Compared and swapped if required"
        }
    },
    {
        name:"Selection Sort",
        timeComp:"O( n^2 )",
        spaceComp:"O( 1 )",
        colours:{
            "green":"Checking the element if it is smallest",
            "blue":"Smallest Element Found Till Now",
            "orange":"Sorted part of array"
        }
        
    },
    {
        name:"Insertion Sort",
        timeComp:"O( n^2 )",
        spaceComp:"O( 1 )",
        colours:{
            "green":"Comparing the element with element stored in temp variable and shifting it rightwards if it less than temp",
            "orange":"Sorted part of array"
        }
        
    },
    {
        name:"Quick Sort",
        timeComp:"O( nlog ( n ) )",
        spaceComp:"O( log ( n ) )",
        colours:{
            green:"Pivot Element. Getting this element to its correct position"
        }
    },
    {
        name:"Merge Sort",
        timeComp:"O( nlog ( n ) )",
        spaceComp:"O( n )",
        colours:{
        }
    }
]
export default theory