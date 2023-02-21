/**
 *
 * @param {Array} arr
 * @returns id
 */

function generateId(arr) {
  if (arr.length === 0) return 1;
  return arr[arr.length - 1].id + 1;
}

/**
 * @property todoList
 * @method addItems
 * @method update
 * @method done
 * @method next
 * @method find
 * @method list
 */

class Todo {
  constructor(todoList = []) {
    this.todoList = todoList;
  }

  addItems(task) {
    const item = {
      id: generateId(this.todoList),
      task,
      created: new Date(),
    };
    this.todoList.push(item);
  }
  
    update(id, task) {
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].id === id) {
                this.todoList[i].task = task;
                return;
            }
        }
    }

    done() {
        return this.todoList.shift();
    }

    next() {
        return this.todoList[0];
    }

    find(term) {
        const result = [];
        for (let i = 0; i < this.todoList.length; i++) {
            const item = this.todoList[i];
            if (item.task.toLowerCase().includes(term.toLowerCase())) {
                result.push(item);
            }
        }
        return result;
    }

    list() {
        return this.todoList;
    }

}

module.exports = Todo;
