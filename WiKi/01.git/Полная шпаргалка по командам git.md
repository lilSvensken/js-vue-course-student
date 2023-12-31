Шпаргалка по Git и Git Flow
===============

## [Оригинал статьи](https://github.com/arslanbilal/git-cheat-sheet) 

### Index
* [Настройки](#settings)
* [Файлы конфигурации](#configuration-files)
* [Создание](#create)
* [Локальные изменения](#local-changes)
* [Поиск](#search)
* [История коммитов](#commit-history)
* [Переместить/переименовать](#move--rename)
* [Ветки & теги](#branches--tags)
* [Обновление и публикация](#update--publish)
* [Слияние и перебазирование](#merge--rebase)
* [Отмена](#undo)

<hr>

## <a id="settings">Настройки</a>

##### Показать текущую конфигурацию:
```
$ git config --list
```
##### Показать конфигурацию репозитория:
```
$ git config --local --list
```

##### Показать глобальную конфигурацию:
```
$ git config --global --list
```

##### Показать конфигурацию системы:
```
$ git config --system --list
```

##### Задайте имя, которое можно будет идентифицировать при просмотре истории версий:
```
$ git config --global user.name "[firstname lastname]"
```

##### Установите адрес электронной почты, который будет связан с каждым маркером истории:
```
$ git config --global user.email "[valid-email]"
```

##### Установите автоматическую раскраску командной строки для Git для удобства просмотра:
```
$ git config --global color.ui auto
```

##### Установить глобальный редактор для фиксации коммита
```
$ git config --global core.editor vi
```

<hr>

## <a id="configuration-files">Файлы конфигурации</a>

##### Файл конфигурации конкретного репозитория [--local]:
```
<repo>/.git/config
```

##### Пользовательский файл конфигурации [--global]:
```
~/.gitconfig
```

##### Общесистемный файл конфигурации [--system]:
```
/etc/gitconfig
```

<hr>

## <a id="create">Создание</a>

##### Клонирование существующего репозитория:

Есть два способа:

Через SSH

```
$ git clone ssh://user@domain.com/repo.git
```

Через HTTP

```
$ git clone http://domain.com/user/repo.git
```

##### Создание нового локального репозитория в текущей директории:
```
$ git init
```

##### Создание нового локального репозитория в определенной директории:
```
$ git init <directory>
```

<hr>

## <a id="local-changes">Локальные изменения</a>

##### Изменения в рабочей директории:
```
$ git status
```

##### Изменения в отслеживаемых файлах:
```
$ git diff
```

##### Посмотреть изменения/отличия конкретного файла:
```
$ git diff <file>
```

##### Добавьте все текущие изменения в следующий коммит:
```
$ git add .
```

##### Добавьте некоторые изменения в &lt;file&gt;  в следующий коммит:
```
$ git add -p <file>
```

##### Добавьте в следующий коммит только указанные файлы:
```
$ git add <filename1> <filename2>
```

##### Зафиксируйте все локальные изменения в отслеживаемых файлах:
```
$ git commit -a
```

##### Зафиксируйте ранее подготовленные изменения:
```
$ git commit
```

##### Зафиксировать с сообщением:
```
$ git commit -m 'message here'
```

##### Зафиксируйте пропуск промежуточной области и добавьте сообщение:
```
$ git commit -am 'message here'
```

##### Привязка к какой-либо предыдущей дате:
```
$ git commit --date="`date --date='n day ago'`" -am "<Commit Message Here>"
```

##### Изменить последний коммит:<br>
<em><sub>Не вносите изменения в опубликованные коммиты!</sub></em>

```
$ git commit -a --amend
```

##### Изменить с помощью последнего коммита, но использовать предыдущее сообщение журнала фиксации.
<em><sub>Не вносите изменения в опубликованные коммиты!</sub></em>

```shell
$ git commit --amend --no-edit
```

##### Изменить дату последнего коммита:
```
GIT_COMMITTER_DATE="date" git commit --amend
```

##### Изменить дату автора последнего коммита:
```shell
$ git commit --amend --date="date"
```

##### Переместите незафиксированные изменения из текущей ветки в другую ветку:<br>
```
$ git stash
$ git checkout branch2
$ git stash pop
```

##### Восстановите спрятанные изменения обратно в текущую ветку:
```shell
$ git stash apply
```

#### Восстановить конкретный тайник обратно в текущую ветку:
- *{stash_number}* можно получить из `git stash list`

```shell
$ git stash apply stash@{stash_number}
```

##### Удалите последний набор скрытых изменений:
```
$ git stash drop
```

<hr>

## <a id="search">Поиск</a>

##### Текстовый поиск по всем файлам в директории:
```
$ git grep "Hello"
```

##### В любом варианте текстового поиска:
```
$ git grep "Hello" v2.5
```

##### Показать коммиты, в которых введено определенное ключевое слово
```
$ git log -S 'keyword'
```

##### Показать коммиты, в которых введено определенное ключевое слово (используя регулярное выражение).
```
$ git log -S 'keyword' --pickaxe-regex
```

<hr>

## <a id="commit-history">История коммитов</a>

##### Показать все коммиты, начиная с самого нового (покажет хеш, информацию об авторе, дату коммита и название коммита):
```
$ git log
```

##### Показать все коммиты (покажутся только хэш коммита и сообщение о коммите):
```
$ git log --oneline
```

##### Показать все коммиты конкретного пользователя:
```
$ git log --author="username"
```

##### Показать изменения с течением времени для конкретного файла:
```
$ git log -p <file>
```

##### Отображение коммитов, которые присутствуют только в удаленной/ветви справа.
```
$ git log --oneline <origin/master>..<remote/master> --left-right
```

##### Кто, что и когда менял в &lt;file&gt;:
```
$ git blame <file>
```

##### Показать справочный журнал:
```
$ git reflog show
```

##### Удалить справочный журнал:
```
$ git reflog delete
```
<hr>

## <a id="move--rename">Переместить/переименовать</a>

##### Переименуйте файл:

Переименуйте Index.txt в Index.html.

```
$ git mv Index.txt Index.html
```

<hr>

## <a id="branches--tags">Ветки & теги</a>

##### Перечислите все местные ветки:
```
$ git branch
```

#### Перечислить локальные/удаленные ветки
```
$ git branch -a
```

##### Перечислите все удаленные ветки:
```
$ git branch -r
```

##### Переключить ветку HEAD:
```
$ git checkout <branch>
```

##### Переключить один файл из другой ветки
```
$ git checkout <branch> -- <filename>
```

##### Создайте и переключите новую ветку:
```
$ git checkout -b <branch>
```

##### Переключитесь на предыдущую ветку, не называя имя явно:
```
$ git checkout -
```

##### Создайте новую ветку из существующей ветки и переключитесь на новую ветку:
```
$ git checkout -b <new_branch> <existing_branch>
```


#### Переключитесь и создайте новую ветку из существующего коммита
```
$ git checkout <commit-hash> -b <new_branch_name>
```


##### Создайте новую ветку на основе вашего текущего HEAD:
```
$ git branch <new-branch>
```

##### Создайте новую ветку отслеживания на основе удаленной ветки:
```
$ git branch --track <new-branch> <remote-branch>
```

##### Удалить локальную ветку:
```
$ git branch -d <branch>
```

##### Переименуйте текущую ветку в новое имя ветки
```shell
$ git branch -m <new_branch_name>
```

##### Принудительно удалить локальную ветку:
<em><sub>Вы потеряете несвязанные изменения!</sub></em>

```
$ git branch -D <branch>
```
##### Примените конкретный коммит из другой ветки:
```
git cherry-pick <commit hash>
```

##### Отметить `HEAD` тегом:
```
$ git tag <tag-name>
```

##### Отметить `HEAD` тегом и откройте редактор, чтобы добавить сообщение:
```
$ git tag -a <tag-name>
```

##### Отметить `HEAD` тегом, содержащим сообщение:
```
$ git tag <tag-name> -am 'message here'
```

##### Список всех тегов:
```
$ git tag
```

##### Перечислите все теги с их сообщениями (сообщение тега или сообщение фиксации, если тег не имеет сообщения):
```
$ git tag -n
```

<hr>

## <a id="update--publish">Обновление и публикация</a>

##### Список всех текущих настроенных remotes:
```
$ git remote -v
```

##### Показать информацию о remote:
```
$ git remote show <remote>
```

##### Добавьте новый удаленный репозиторий с именем &lt;remote&gt;:
```
$ git remote add <remote> <url>
```

##### Переименуйте удаленный репозиторий с &lt;remote&gt; на  &lt;new_remote&gt;:
```
$ git remote rename <remote> <new_remote>
```

##### Удалить remote:
```
$ git remote rm <remote>
```

<em><sub>Примечание. git Remote RM не удаляет удаленный репозиторий с сервера. Он просто удаляет пульт и его ссылки из вашего локального репозитория.</sub></em>

##### Скачайте все изменения из &lt;remote&gt;, но не интегрируйте их в HEAD:
```
$ git fetch <remote>
```

##### Скачайте изменения и напрямую объедините/интегрируйте их в HEAD:
```
$ git remote pull <remote> <url>
```

##### Получите все изменения из HEAD в локальный репозиторий:
```
$ git pull origin master
```

##### Получите все изменения из HEAD в локальный репозиторий без слияния:
```
$ git pull --rebase <remote> <branch>
```

##### Опубликуйте локальные изменения на удаленном компьютере:
```
$ git push <remote> <branch>
```

##### Удалить ветку на remote:
```
$ git push <remote> :<branch> (since Git v1.5.0)
```
OR
```
$ git push <remote> --delete <branch> (since Git v1.7.0)
```

##### Публикуйте свои теги:
```
$ git push --tags
```
<hr>

#### Глобальная настройка инструмента слияния для объединения (редактор)
```bash
$ git config --global merge.tool meld
```

##### Используйте настроенный инструмент слияния для разрешения конфликтов:
```
$ git mergetool
```

## <a id="merge--rebase">Слияние и перебазирование</a>

##### Объедините ветку с текущим HEAD:
```
$ git merge <branch>
```

#### Список объединенных ветвей
```
$ git branch --merged
```

##### Перебазируйте текущий HEAD в &lt;branch&gt;:<br>
<em><sub>Не перебазируйте опубликованный коммит!</sub></em>

```
$ git rebase <branch>
```

##### Прервать перебазирование:
```
$ git rebase --abort
```

##### Продолжите перебазирование после разрешения конфликтов:
```
$ git rebase --continue
```

##### Используйте свой редактор, чтобы вручную разрешить конфликты и (после разрешения) пометить файл как разрешенный:
```
$ git add <resolved-file>
```

```
$ git rm <resolved-file>
```

##### Сжатие коммита:
```
$ git rebase -i <commit-just-before-first>
```

Now replace this,

```
pick <commit_id>
pick <commit_id2>
pick <commit_id3>
```

to this,

```
pick <commit_id>
squash <commit_id2>
squash <commit_id3>
```
<hr>

## <a id="undo">Отмена</a>

##### Отмените все локальные изменения в вашей рабочей директории:
```
$ git reset --hard HEAD
```

##### Получите все файлы из промежуточной области (т.е. отмените последний `git add`):
```
$ git reset HEAD
```

##### Отменить локальные изменения в конкретном файле:
```
$ git checkout HEAD <file>
```

##### Отменить фиксацию (путем создания новой фиксации с противоположными изменениями):
```
$ git revert <commit>
```

##### Сбросьте указатель HEAD на предыдущую фиксацию и отмените все изменения с тех пор:
```
$ git reset --hard <commit>
```

##### Сбросьте указатель HEAD в текущее состояние удаленной ветки.
```
$ git reset --hard <remote/branch> e.g., upstream/master, origin/my-feature
```

##### Сбросьте указатель HEAD на предыдущую фиксацию и сохраните все изменения как неиндексированные изменения:
```
$ git reset <commit>
```

##### Сбросьте указатель HEAD на предыдущую фиксацию и сохраните незафиксированные локальные изменения:
```
$ git reset --keep <commit>
```

##### Удалите файлы, которые были случайно зафиксированы до того, как они были добавлены в .gitignore.
```
$ git rm -r --cached .
$ git add .
$ git commit -m "remove xyz file"
```
<hr>
