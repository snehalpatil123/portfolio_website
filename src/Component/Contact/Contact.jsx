import React from 'react'
import './Contact.css'
export default function contact() {
  return (
    <div className="contact mt-6 pt-6" id="contact" >
      <div className="border bg-secondary pt-3">
        <h1 className="text-center p-5">CONTACT ME</h1>

        <div className=" m-auto p-auto">
          <ul className="nav d-flex justify-content-center">
            <li className="nav-item"><a className="nav-link" href="http://accounts.google.co.in"><button className="btn border border-danger"><i class="fa fa-envelope" aria-hidden="true"></i>Email Me </button> </a> </li>
            <li className="nav-item"> <a className="nav-link" href="http://WWW.linkedin.com"><button className="btn border border-info"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AZsgAWMQAY8cAWcTs8voAXcbz9/zh6vcAYcdBf9Cqwef7/f8AW8UAYsdumdgAVcRkk9Z1ndrG1u96oduQsOCuxei2yuozeM5PhtIUbMoncszD1O44e86Bpd3c5vXQ3fGJqt6dueMAUMJYi9SQ2xJeAAAEuElEQVR4nO2d63aiMBRGgYRoKlAoXsFLO9P3f8ZBnTpKQnTN4uQIfvuvUbobyI3knCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAoIjL2WJebNZVpqJeUDqsd5tivliWE265ICjnVZQqnWVCiLA/ml/LtFZpVO1LTr3pPk11n2IWVS3VfsrkFxe5JrX7QedFzCG48OR3dlx494tr5c3viKo9V2MpaR8/EyG9NjnL3LPfkXw5ckGfiiWPYKPo6UaNJZNgGEZ+mpvadyPzD1H7EFz47SZuUR76xZjrITyT09+nhb+RjA1dUAtOeauwqUTqYfietwqbStwTG3I2M2dSWsGSry+8GNJ2++w3aXObzkkNK77e/gdRUQpOIm6/kHjoVqbceiHxg7jkb0qbkduM0HDB39A0TQ3l2HR+37DfdVMb2QehYZG5L65TWb/VUpJWdUY5NN0460fkxeep2Od7TliRYkNouHP94bo6XApOa7pqFGtCQ9f0Xr/dFN3QKVJ2+Y7LGkMNusWOjNDQUS/RZ6vsgWwmqQgNuzv8zHz87zW8/01EaNg9LFVbozDZEI/HMDLf1iZUw3QeQ20pXY3KMLSUpmpNmZ5DS2kaP7bn0JyWkk2XmerQfPO1pZpM8hiKnVHYPUwfnGEo2x1iSbamw2QY6tseMaGbP3EZiupacUL4lpHLMBRqdSm4pdwqxWbYPIvr2fHNULxcky7+Mxo21SillpGiXYziNPQDDGEIQ34GZSj0373hUj3eg3IZytZ+dNn1yWXKIVS++1od4iRJ4sPqa50/OBnhGnnHQXJD/FNYHm4+CVZnESHr2e1QNv4VPuTIZGhMgS8TYNnaAXM2TGtzdS4IZuqBJchBGGZpx17RpLj/rA/BUO26j4qs7ioOwFC+uy4yvdeqPr/h7zsbt+5t0X16w+Xdd7hb94369IYPbBZ5d758fHrDB3AvtY7BMPhyVeIoDJ2VOArD4MMxthmH4cF1qT5UOvBn6NrnORjDyWpfbL7nS/tmSkdbMxDD6XeudCYyrfJvm6PjzdUwDH/l/5qSLF+ZBeLuaw3CcHH7SzbF7sHpEAyN832Wwz7DbmmMb2tzPuW4FJHdkZ4Ml+ZeoihpFxq04Zt5B6bGqs2QDRPLnj5z8/aQDT8tzaR5EmbIhrYzDWZTM2TDGQxPwJAGGF4DQxjCkAYYXgNDGMKQBhheA0MYjs7QOIIOQxpgeA0MYfjKhpSxsBwbXD0aUp7Hd20B8WdoO3PcF64NEt4MSQNgrp/C0Dyu2h+Og69GyIFLwAHZdre+mXn83RNpfBpHqAvx1ubnvyF2rQ9q2/er9tc7r0QaY2juaGpEm85PHvt+54VIg+6NP9aXrY3wDmm8tvHH3HNsxfKHJVBMj4w+9uUjQfeoIQ6z+wQPInWOBH5DypnFEfYwu+SxoMcfz3v8MdlfIK7++HMjvEB+C86hm6ccJcF27HlmXiBX0Avke2LJ2RXZIhQQMvq8a8H4c+cFL5D/MDjmsFSSPIdlypfD8kS5P+Uh1T3nIQ2FyLJTHtI5ax7SM5NzLtldHTZ/UT/JZEW13hQfi1nJdXcCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgP/kDjnplWREBPBIAAAAASUVORK5CYII= " alt="" />  Linkedin</button></a> </li>
            <li className="nav-item"> <a className="nav-link" href="https://github.com/topics/github-login "><button className="btn border border-dark"><img src=" data:image/png;base64,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" alt="" /> GitHub</button></a>   </li>
            <li className="nav-item"><a className="nav-link" href="https://www.youtube.com"><button className="btn border border-dark"> <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNY0pC7zNHt8ekplZwkB9iNNKS31fMuApzg&s" alt="" />Medium</button></a></li>
            <li className="nav-item"><a className="nav-link" href="https://twitter.com/home "><button className="btn border border-info"><img src=" data:image/png;base64,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" alt="" />Twitter</button></a></li>


          </ul>
        </div>


      </div>

    </div>

  )
}
