const dictionary: Record<string, string> = {
    //?
    AddNewOrder: 'Создать новую заявку',
    Submit: 'Создать',
    AddNewUser: 'Добавить нового пользователя',
    CloseOrder: 'Закрыть заявку',
    Login: 'Войти',
    CreateNewOrder: 'Создать заявку',
    Search: 'Поиск',
    SearchForAnUser: 'Поиск пользователя',
    CreateNewUser: 'Добавить пользователя',
    More: 'Больше',
    Edit: 'Редактировать',
    Delete: 'Удалить',
    EditUser: 'Редактировать',
    DeleteUser: 'Удалить',
    SearchForAnOrder: 'Искать заявку',
    SearchBy: 'Искать по',
    FilterByStatus: 'Фильтр по статусу',
    NotFound: 'Не найдено',

    //? Заявка
    clientPhoneNumber: 'Номер телефона кл',
    Address: 'Адрес',
    ClientName: 'Имя кл',
    MasterName: 'Имя мастера',
    AnnouncedPrice: 'Озвучка',
    Description: 'Описание',
    Time: 'Время',
    OrderDate: 'Дата заявки',
    TotalPrice: 'Итог',

    //? Статусы заявки
    pending: 'Ожидание', // Ожидает
    fulfilled: 'Закрыта', // Успешно
    rejectedByClient: 'Отклонена КЛ', // Отказ клиента
    rejectedByMaster: 'Отклонена Мастером', // Отказ мастера
    atWork: 'В работе', // В работе
    active: 'Активная', //активная заявка
    masterWentForSparePart: 'Мастер отъехал за ЗЧ', // Мастер отъехал за зч
    awaitingPayment: 'Ожидает сдачи', // ожидает оплаты
    all: 'Все',

    //? Статусы пользователя
    waitForWork: 'Свободен',
    wentForSparePart: 'Отъехал за ЗЧ',
    dayOff: 'Выходной',

    //? Визиты
    primary: 'Первичный',
    repeated: 'Повторный',
    guarantee: 'Гарантия',

    //? Пользователь
    UserName: 'Логин',
    TelegramChatId: 'Telegram_chat_id',
    Password: 'Пароль',
    MessageId: 'Message_thread_id',
    master: 'Мастер',
    admin: 'Администратор',
};

export const translate = (key: string) => {
    return dictionary[key] || key;
};
