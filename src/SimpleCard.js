import React from "react";

class SimpleCard extends React.Component {
  render() {
    return (
      <div className="container">
        <Title heading="A Title" />

        <Description text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum soluta deleniti ex praesentium eveniet animi fuga temporibus doloremque modi rem dolorum, odio error ea illo commodi fugiat similique maxime, a nemo rerum inventore voluptatum hic. Corporis, quam nisi. Assumenda ratione dicta inventore totam quam ad est, atque sed iure! Earum." />

        <Image src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9848/9781984827616.jpg" />
      </div>
    );
  }
}

const Title = (props) => {
  return <h1 id="title">{props.heading}</h1>;
};

class Description extends React.Component {
  render() {
    return <p id="para">{this.props.text}</p>;
  }
}

const Image = (props) => <img src={props.src} alt="Sample Image" />;

export default SimpleCard;
