import './App.css';
import BlogCardsContainer from './components/BlogCardsContainer';
import BlogCard from './components/BlogCard';

function App() {
  return (
    <main className='l-main u-vertically-center'>
      <BlogCardsContainer>
        <BlogCard 
          topic="some topic"
          imageSource="https://assets.ubuntu.com/v1/0f33d832-The-State-of-Robotics.jpg"
          title="The state of robotics - august 2021"
          contentUrl="#"
          author='Mason'
          authorUrl="#"
          date="21st August 2021"
          category='article'
        />
      </BlogCardsContainer>
    </main>
  );
}

export default App;
