import React from 'react'
import './Msg.css'
import prin_sir from '../../assets/prin_sir.jpg'

const Msg = () => {
  return (
    <>
    <div className="main_message">
    <h1>Message from principal</h1>
    <div className="main_msg">
      <div className="left">
        <img src={prin_sir} alt="" />
      </div>
  
      <div className="right">
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, aperiam voluptatem nemo ratione sint facere excepturi obcaecati minus suscipit, reprehenderit non deleniti? Aspernatur illum sit atque excepturi nulla eligendi aliquid.
         Rem ea tempore aliquam ducimus! Illo ab error temporibus, recusandae nihil porro perferendis cupiditate, ipsum eos facilis optio dolor totam fuga nulla dolore, quasi reiciendis aliquam! Cumque sapiente quam alias!
         Molestiae culpa sit vel aliquam omnis quibusdam at aliquid tempore expedita cupiditate delectus autem animi vero obcaecati corporis quae sint laboriosam maxime inventore accusamus, hic impedit ducimus est! Cupiditate, ullam?
         Hic quas vero, nam aut error, blanditiis quisquam perferendis reiciendis explicabo nesciunt, dignissimos accusantium earum tempora qui! Voluptate, nam consectetur! Qui, totam eveniet illo minus dolorum officiis sit obcaecati sed?
         Quos, aut distinctio. Porro eum id minus veritatis? Eligendi facere eveniet eius est beatae rem odit sed. Sequi cum animi molestiae quod necessitatibus obcaecati! Eveniet in harum minus iusto quis!
         </p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Msg