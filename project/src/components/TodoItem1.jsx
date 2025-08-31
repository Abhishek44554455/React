function TodoItem(){

            let TodoName="Buy Milk";
            let TodoDate="10/5/25";
            return <div class="container ">
        <div class="row kg-row">
          <div class="col-6">{TodoName}</div>
          <div class="col-4">{TodoDate}</div>
          <div class="col-2"><button type="button" class="btn btn-primary kg-button">Delete</button></div>
        </div>
      </div>
}
export default TodoItem;