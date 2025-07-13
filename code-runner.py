import io
import contextlib
import streamlit as st
import sys
from datetime import datetime

# Page configuration
st.set_page_config(
    page_title="Python Code Runner - Gaurav Ghadge",
    page_icon="🐍",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for better styling
st.markdown("""
<style>
    .main-header {
        background: linear-gradient(135deg, #00d4ff, #ff0080);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-size: 3rem;
        font-weight: 900;
        text-align: center;
        margin-bottom: 2rem;
    }
    
    .subtitle {
        text-align: center;
        color: #666;
        font-size: 1.2rem;
        margin-bottom: 3rem;
    }
    
    .code-area {
        border-radius: 10px;
        border: 2px solid #00d4ff;
        padding: 1rem;
        background: #1a1a1a;
        color: #fff;
    }
    
    .output-area {
        background: #0a0a0a;
        border: 1px solid #333;
        border-radius: 10px;
        padding: 1rem;
        margin-top: 1rem;
    }
    
    .success-output {
        background: #0a0a0a;
        border: 1px solid #00ff88;
        border-radius: 10px;
        padding: 1rem;
        margin-top: 1rem;
    }
    
    .error-output {
        background: #0a0a0a;
        border: 1px solid #ff0080;
        border-radius: 10px;
        padding: 1rem;
        margin-top: 1rem;
    }
    
    .example-card {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 1rem;
        margin: 0.5rem 0;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .example-card:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: #00d4ff;
        transform: translateY(-2px);
    }
    
    .stats-container {
        display: flex;
        justify-content: space-around;
        margin: 2rem 0;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
    }
    
    .stat-item {
        text-align: center;
    }
    
    .stat-number {
        font-size: 2rem;
        font-weight: bold;
        color: #00d4ff;
    }
    
    .stat-label {
        color: #666;
        font-size: 0.9rem;
    }
</style>
""", unsafe_allow_html=True)

# Header
st.markdown('<h1 class="main-header">🐍 Python Code Runner</h1>', unsafe_allow_html=True)
st.markdown('<p class="subtitle">Practice Python programming with live code execution</p>', unsafe_allow_html=True)

# Sidebar
with st.sidebar:
    st.header("📚 Quick Examples")
    st.markdown("Click any example to load it into the editor:")
    
    examples = {
        "Hello World": 'print("Hello, World!")',
        "Simple Calculator": '''a = 10
b = 5
print(f"Sum: {a + b}")
print(f"Difference: {a - b}")
print(f"Product: {a * b}")
print(f"Division: {a / b}")''',
        "List Operations": '''numbers = [1, 2, 3, 4, 5]
print(f"Original list: {numbers}")
print(f"Sum: {sum(numbers)}")
print(f"Average: {sum(numbers) / len(numbers)}")
print(f"Max: {max(numbers)}")
print(f"Min: {min(numbers)}")''',
        "String Manipulation": '''text = "Python Programming"
print(f"Original: {text}")
print(f"Uppercase: {text.upper()}")
print(f"Lowercase: {text.lower()}")
print(f"Length: {len(text)}")
print(f"Words: {text.split()}")''',
        "Dictionary Example": '''student = {
    "name": "John Doe",
    "age": 20,
    "courses": ["Python", "Data Science", "ML"]
}
print("Student Information:")
for key, value in student.items():
    print(f"{key}: {value}")''',
        "Function Example": '''def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print("Fibonacci sequence:")
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")''',
        "File Operations": '''# Create a sample file
with open("sample.txt", "w") as f:
    f.write("Hello from Python Code Runner!")

# Read the file
with open("sample.txt", "r") as f:
    content = f.read()
    print("File content:")
    print(content)''',
        "List Comprehension": '''numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squares = [x**2 for x in numbers]
evens = [x for x in numbers if x % 2 == 0]
odds = [x for x in numbers if x % 2 != 0]

print(f"Numbers: {numbers}")
print(f"Squares: {squares}")
print(f"Evens: {evens}")
print(f"Odds: {odds}")''',
        "Error Handling": '''try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("Error: Please enter a valid number")
except ZeroDivisionError:
    print("Error: Cannot divide by zero")
except Exception as e:
    print(f"Unexpected error: {e}")''',
        "Class Example": '''class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")
    
    def is_adult(self):
        return self.age >= 18

# Create student objects
student1 = Student("Alice", 20)
student2 = Student("Bob", 16)

student1.display()
student2.display()
print(f"{student1.name} is adult: {student1.is_adult()}")
print(f"{student2.name} is adult: {student2.is_adult()}")'''
    }
    
    for title, code in examples.items():
        if st.button(title, key=f"example_{title}"):
            st.session_state.code = code
            st.rerun()

# Main content area
col1, col2 = st.columns([2, 1])

with col1:
    st.header("💻 Code Editor")
    
    # Initialize session state for code
    if 'code' not in st.session_state:
        st.session_state.code = '# Write your Python code here\nprint("Hello, World!")'
    
    # Code input area
    code = st.text_area(
        "Enter your Python code:",
        value=st.session_state.code,
        height=300,
        help="Write your Python code here and click 'Run Code' to execute it."
    )
    
    # Run button
    col_run1, col_run2, col_run3 = st.columns([1, 1, 1])
    
    with col_run2:
        if st.button("🚀 Run Code", type="primary", use_container_width=True):
            if code.strip():
                # Capture output
                output_buffer = io.StringIO()
                error_buffer = io.StringIO()
                
                # Redirect stdout and stderr
                with contextlib.redirect_stdout(output_buffer), contextlib.redirect_stderr(error_buffer):
                    try:
                        # Execute the code
                        exec(code, {})
                        output = output_buffer.getvalue()
                        error_output = error_buffer.getvalue()
                        
                        # Display results
                        if output:
                            st.markdown('<div class="success-output">', unsafe_allow_html=True)
                            st.success("✅ Code executed successfully!")
                            st.code(output, language="python")
                            st.markdown('</div>', unsafe_allow_html=True)
                        
                        if error_output:
                            st.markdown('<div class="error-output">', unsafe_allow_html=True)
                            st.error("⚠️ Warnings/Errors:")
                            st.code(error_output, language="python")
                            st.markdown('</div>', unsafe_allow_html=True)
                        
                        # Show balloons for successful execution
                        st.balloons()
                        
                        # Update session state
                        st.session_state.last_run = datetime.now()
                        st.session_state.run_count = st.session_state.get('run_count', 0) + 1
                        
                    except Exception as e:
                        st.markdown('<div class="error-output">', unsafe_allow_html=True)
                        st.error(f"❌ Error: {str(e)}")
                        st.code(f"Error Type: {type(e).__name__}\nError Message: {str(e)}", language="python")
                        st.markdown('</div>', unsafe_allow_html=True)
            else:
                st.warning("Please enter some code to run.")

with col2:
    st.header("📊 Statistics")
    
    # Display statistics
    run_count = st.session_state.get('run_count', 0)
    last_run = st.session_state.get('last_run', None)
    
    st.metric("Code Runs", run_count)
    
    if last_run:
        st.metric("Last Run", last_run.strftime("%H:%M:%S"))
    
    st.header("🔧 Features")
    st.markdown("""
    - ✅ **Live Code Execution**
    - ✅ **Safe Environment**
    - ✅ **Error Handling**
    - ✅ **Output Capture**
    - ✅ **Quick Examples**
    - ✅ **Real-time Feedback**
    """)
    
    st.header("⚠️ Safety Notice")
    st.info("""
    This is a safe learning environment. 
    File operations are limited and system commands are restricted.
    """)

# Footer
st.markdown("---")
st.markdown("""
<div style="text-align: center; color: #666;">
    <p>Built with ❤️ by <strong>Gaurav Ghadge</strong> | AI Engineer & Python Mentor</p>
    <p>Visit <a href="https://gauravghadge.com" target="_blank">gauravghadge.com</a> for more resources</p>
</div>
""", unsafe_allow_html=True)

# Initialize session state
if 'run_count' not in st.session_state:
    st.session_state.run_count = 0 