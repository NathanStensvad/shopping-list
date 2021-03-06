function runShoppingList() {
    $('#js-shopping-list-form').on('submit', function(e) {
        e.preventDefault();
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${$(e.currentTarget).find('input[name=shopping-list-entry]').val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
    })

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
      });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
        e.preventDefault();
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    })
}

runShoppingList();