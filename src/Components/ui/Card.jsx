/* eslint-disable react/prop-types */

const Card = (props) => {
  return (
    <article className=" text-center  w-6/2 h-4/6 px-2 border-2 lg:w-[20rem]  ">
      <img className=" " src={props.product} alt={props.title} />
      <h4 className="text-xl my-3">{props.title} </h4>
    </article>
  );
};

export default Card;
