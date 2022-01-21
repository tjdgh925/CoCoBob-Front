import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PostInputData } from '../../types/types';
import { initialize, updatePost } from '../../features/post/slices';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '2rem',
    },
    header: {
      paddingLeft: theme.spacing(1),
    },
    input: {
      height: 40,
    },
    button: {
      height: 40,
      backgroundColor: 'black',
      color: 'white',
    },
    tagsContainer: {
      display: 'flex',
    },
    tags: {
      padding: theme.spacing(1),
    },
  })
);

const TagBox = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postState: PostInputData = useTypedSelector((state) => state.post.data);
  const title = postState.title;
  const contents = postState.contents;
  const tags: string[] | null = postState.tag.split(',');
  // const deadline = postState.deadline;
  Object.preventExtensions(postState);
  const [tag, setTag] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  const onChange = useCallback((e) => {
    const { value } = e.target;
    setTag(value);
  }, []);

  const onClick = useCallback(
    (e) => {
      if (!tag) return;
      if (tags.includes(tag)) return;
      const temp: string[] = [...tags, tag];
      dispatch(
        updatePost({
          title: title,
          contents: contents,
          tag: temp.toString(),
          // deadline: deadline,
        })
      );
      setTag('');
    },
    [tag, tags, dispatch, title, contents]
  );

  const onRemove = useCallback(
    (e) => {
      const value = e.target.innerText;
      const temp = tags.filter((temp) => temp !== value.substr(1));

      dispatch(
        updatePost({
          title: title,
          contents: contents,
          tag: temp.toString(),
          // deadline: deadline,
        })
      );
    },
    [tags, dispatch, title, contents]
  );

  return (
    <Box className={classes.container}>
      <Typography className={classes.header}>태그</Typography>
      <Box>
        <TextField
          variant="outlined"
          placeholder="태그를 입력하세요"
          InputProps={{
            className: classes.input,
          }}
          value={tag}
          onChange={onChange}
        />
        <Button variant="outlined" className={classes.button} onClick={onClick}>
          추가
        </Button>
      </Box>
      <Box className={classes.tagsContainer}>
        {tags &&
          tags.map((tag) => {
            if (tag !== '')
              return (
                <Typography
                  className={classes.tags}
                  onClick={onRemove}
                  key={tag}
                >
                  #{tag}
                </Typography>
              );
          })}
      </Box>
    </Box>
  );
};

export default TagBox;
