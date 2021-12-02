# Typescript + CRA + Redux

This app has configuration for typescript

# My Notes 

--npx create-react-app ts-react-redux --template typescript

The difference between 
'.tsx' -> typescipt with jsx '.tsx' and '.ts' 
'.ts' -> generic file that has business logic in it. It doesn't render any jsx.

--yarn start

index-class.tsx
Component<P, S> Component has the prop and state. Annotation for the generic. P is the first parameter for props. S is the second parameter for the state. State is Readonly<S>

index-function.tsx
If It isn't receiving any props on App, if you have props inside of the function, make aoptional your property inside of the interface.


