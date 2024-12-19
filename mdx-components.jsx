// Cho Javascript
export function useMDXComponents(components) {
    return {
      h1: (props)=><H1 {...props} />,
      ...components,
    }
  }

