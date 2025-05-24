import './StoryBlock.Style.css';

export function StoryBlock() {

  const storyBlock = {
    title: "Story Block Title",
    description: "This is a description of the story block. It contains information about the story.",
    footer: "Footer text goes here."
  };
  return (
    <div className="Story_Block">
      <div className="Story_Block_Header">
        <h2>{storyBlock.title}</h2>
      </div>
      <div className="storyBlock_body">
        <p>{storyBlock.description}</p>
      </div>
      <div className="storyBlock_footer">
        <p>{storyBlock.footer}</p>
      </div>
    </div>
  );
}