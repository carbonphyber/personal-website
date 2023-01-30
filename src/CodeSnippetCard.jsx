/* eslint-env browser */
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import { styled } from '@mui/material/styles';

const CodeSnippet = styled(Paper)`
  ${({ theme }) => `
    padding: ${theme.spacing(2)};
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.0);
    transition: ${theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeIn,
    })};
  `}
`;

export function CodeSnippetCard({ text }) {
  const animationFinishDelay = 6000;
  const textRef = useRef(null);
  const [isHighlighted, setIsHighlighed] = useState();
  const [isSnackbarShown, setIsSnackbarShown] = useState();

  const handleClick = async (evt) => {
    try {
      await navigator.clipboard.writeText(textRef.current.textContent);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  
    setIsHighlighed(true);
    setIsSnackbarShown(true);
  };

  useEffect(() => {
    if (!isHighlighted) {
      return undefined;
    }
    const timer = setTimeout(() => {
      setIsHighlighed(false);
    }, animationFinishDelay);
    return () => clearTimeout(timer);
  }, [isHighlighted]);

  useEffect(() => {
    if (!isSnackbarShown) {
      return undefined;
    }
    const timer = setTimeout(() => {
      setIsSnackbarShown(false);
    }, animationFinishDelay);
    return () => clearTimeout(timer);
  }, [isSnackbarShown]);

  return (
    <>
      <Card variant="outline">
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <CodeSnippet
              sx={{ backgroundColor: isHighlighted ? 'rgba(255, 255, 0, 0.5)' : undefined }}
            >
              <pre>
                <code ref={textRef}>{text}</code>
              </pre>
            </CodeSnippet>
          </CardContent>
        </CardActionArea>
      </Card>
      <Snackbar open={isSnackbarShown} autoHideDuration={animationFinishDelay}>
        <Alert severity="success">
          Code copied to clipboard
        </Alert>
      </Snackbar>
    </>
  );
}

CodeSnippetCard.propTypes = {
  text: PropTypes.string.isRequired,
};
