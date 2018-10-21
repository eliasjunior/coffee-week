import React from 'react'
// new react 16 error boundary, to render an error to the user intead the app crashes
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({
            hasError: true,
            error,
            errorInfo: info
        });
        // You can also log the error to an error reporting service
        console.error(error, info);
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <div>
                <h2>{this.state.error}</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
            </div>;
        }
        return this.props.children;
    }
}
export default ErrorBoundary